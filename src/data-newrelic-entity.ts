// https://www.terraform.io/docs/providers/newrelic/d/entity.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The entity's domain. Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and VIZ. If not specified, all domains are searched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#domain DataNewrelicEntity#domain}
  */
  readonly domain?: string;
  /**
  * Ignore case when searching the entity name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#ignore_case DataNewrelicEntity#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The name of the entity in New Relic One.  The first entity matching this name for the given search parameters will be returned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#name DataNewrelicEntity#name}
  */
  readonly name: string;
  /**
  * The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, and WORKLOAD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#type DataNewrelicEntity#type}
  */
  readonly type?: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#tag DataNewrelicEntity#tag}
  */
  readonly tag?: DataNewrelicEntityTag;
}
export interface DataNewrelicEntityTag {
  /**
  * The tag key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#key DataNewrelicEntity#key}
  */
  readonly key: string;
  /**
  * The tag value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html#value DataNewrelicEntity#value}
  */
  readonly value: string;
}

function dataNewrelicEntityTagToTerraform(struct?: DataNewrelicEntityTagOutputReference | DataNewrelicEntityTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataNewrelicEntityTagOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html newrelic_entity}
*/
export class DataNewrelicEntity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_entity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/entity.html newrelic_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicEntityConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_entity',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._ignoreCase = config.ignoreCase;
    this._name = config.name;
    this._type = config.type;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getNumberAttribute('application_id');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string | undefined; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable | undefined; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case') as any;
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // serving_apm_application_id - computed: true, optional: false, required: false
  public get servingApmApplicationId() {
    return this.getNumberAttribute('serving_apm_application_id');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: DataNewrelicEntityTag | undefined; 
  private __tagOutput = new DataNewrelicEntityTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this.__tagOutput;
  }
  public putTag(value: DataNewrelicEntityTag | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      ignore_case: cdktf.booleanToTerraform(this._ignoreCase),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      tag: dataNewrelicEntityTagToTerraform(this._tag),
    };
  }
}
