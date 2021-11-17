// https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNewrelicAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID to operate on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#account_id DataNewrelicAlertPolicy#account_id}
  */
  readonly accountId?: number;
  /**
  * The rollup strategy for the policy. Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#incident_preference DataNewrelicAlertPolicy#incident_preference}
  */
  readonly incidentPreference?: string;
  /**
  * The name of the alert policy in New Relic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html#name DataNewrelicAlertPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html newrelic_alert_policy}
*/
export class DataNewrelicAlertPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/d/alert_policy.html newrelic_alert_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNewrelicAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNewrelicAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._incidentPreference = config.incidentPreference;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number | undefined; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_preference - computed: false, optional: true, required: false
  private _incidentPreference?: string | undefined; 
  public get incidentPreference() {
    return this.getStringAttribute('incident_preference');
  }
  public set incidentPreference(value: string | undefined) {
    this._incidentPreference = value;
  }
  public resetIncidentPreference() {
    this._incidentPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPreferenceInput() {
    return this._incidentPreference
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      incident_preference: cdktf.stringToTerraform(this._incidentPreference),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
