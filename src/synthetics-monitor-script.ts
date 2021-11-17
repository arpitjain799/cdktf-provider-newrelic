// https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMonitorScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the monitor to attach the script to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#monitor_id SyntheticsMonitorScript#monitor_id}
  */
  readonly monitorId: string;
  /**
  * The plaintext representing the monitor script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#text SyntheticsMonitorScript#text}
  */
  readonly text: string;
  /**
  * location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#location SyntheticsMonitorScript#location}
  */
  readonly location?: SyntheticsMonitorScriptLocation[];
}
export interface SyntheticsMonitorScriptLocation {
  /**
  * The monitor script authentication code for the location
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#hmac SyntheticsMonitorScript#hmac}
  */
  readonly hmac?: string;
  /**
  * The monitor script location name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html#name SyntheticsMonitorScript#name}
  */
  readonly name: string;
}

function syntheticsMonitorScriptLocationToTerraform(struct?: SyntheticsMonitorScriptLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac: cdktf.stringToTerraform(struct!.hmac),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html newrelic_synthetics_monitor_script}
*/
export class SyntheticsMonitorScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_synthetics_monitor_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_monitor_script.html newrelic_synthetics_monitor_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMonitorScriptConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMonitorScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_monitor_script',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._monitorId = config.monitorId;
    this._text = config.text;
    this._location = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text
  }

  // location - computed: false, optional: true, required: false
  private _location?: SyntheticsMonitorScriptLocation[] | undefined; 
  public get location() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('location') as any;
  }
  public set location(value: SyntheticsMonitorScriptLocation[] | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor_id: cdktf.stringToTerraform(this._monitorId),
      text: cdktf.stringToTerraform(this._text),
      location: cdktf.listMapper(syntheticsMonitorScriptLocationToTerraform)(this._location),
    };
  }
}
