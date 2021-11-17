// https://www.terraform.io/docs/providers/newrelic/r/insights_event.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InsightsEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * event block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#event InsightsEvent#event}
  */
  readonly event: InsightsEventEvent[];
}
export interface InsightsEventEventAttribute {
  /**
  * The name of the attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#key InsightsEvent#key}
  */
  readonly key: string;
  /**
  * Specify the type for the attribute value. This is useful when passing integer or float values to Insights. Allowed values are string, int, or float. Defaults to string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#type InsightsEvent#type}
  */
  readonly type?: string;
  /**
  * The value of the attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#value InsightsEvent#value}
  */
  readonly value: string;
}

function insightsEventEventAttributeToTerraform(struct?: InsightsEventEventAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface InsightsEventEvent {
  /**
  * Must be a Unix epoch timestamp. You can define timestamps either in seconds or in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#timestamp InsightsEvent#timestamp}
  */
  readonly timestamp?: number;
  /**
  * The event's name. Can be a combination of alphanumeric characters, underscores, and colons.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#type InsightsEvent#type}
  */
  readonly type: string;
  /**
  * attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html#attribute InsightsEvent#attribute}
  */
  readonly attribute: InsightsEventEventAttribute[];
}

function insightsEventEventToTerraform(struct?: InsightsEventEvent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp: cdktf.numberToTerraform(struct!.timestamp),
    type: cdktf.stringToTerraform(struct!.type),
    attribute: cdktf.listMapper(insightsEventEventAttributeToTerraform)(struct!.attribute),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html newrelic_insights_event}
*/
export class InsightsEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_insights_event";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/insights_event.html newrelic_insights_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InsightsEventConfig
  */
  public constructor(scope: Construct, id: string, config: InsightsEventConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_insights_event',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._event = config.event;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // event - computed: false, optional: false, required: true
  private _event?: InsightsEventEvent[]; 
  public get event() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event') as any;
  }
  public set event(value: InsightsEventEvent[]) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event: cdktf.listMapper(insightsEventEventToTerraform)(this._event),
    };
  }
}
