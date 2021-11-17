// https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertPolicyChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of channel IDs to apply to the specified policy. We recommended sorting channel IDs in ascending order to avoid drift your Terraform state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html#channel_ids AlertPolicyChannel#channel_ids}
  */
  readonly channelIds: number[];
  /**
  * The ID of the policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html#policy_id AlertPolicyChannel#policy_id}
  */
  readonly policyId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html newrelic_alert_policy_channel}
*/
export class AlertPolicyChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_policy_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_policy_channel.html newrelic_alert_policy_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertPolicyChannelConfig
  */
  public constructor(scope: Construct, id: string, config: AlertPolicyChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_policy_channel',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._channelIds = config.channelIds;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_ids - computed: false, optional: false, required: true
  private _channelIds?: number[]; 
  public get channelIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('channel_ids') as any;
  }
  public set channelIds(value: number[]) {
    this._channelIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdsInput() {
    return this._channelIds
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._channelIds),
      policy_id: cdktf.numberToTerraform(this._policyId),
    };
  }
}
