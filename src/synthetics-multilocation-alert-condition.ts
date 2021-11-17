// https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsMultilocationAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set whether to enable the alert condition. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#enabled SyntheticsMultilocationAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The GUIDs of the Synthetics monitors to alert on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#entities SyntheticsMultilocationAlertCondition#entities}
  */
  readonly entities: string[];
  /**
  * The title of this condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#name SyntheticsMultilocationAlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the policy where this condition will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#policy_id SyntheticsMultilocationAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The maximum number of seconds a violation can remain open before being closed by the system.  Must be one of: 0, 3600, 7200, 14400, 28800, 43200, 86400
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}
  */
  readonly violationTimeLimitSeconds: number;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#critical SyntheticsMultilocationAlertCondition#critical}
  */
  readonly critical: SyntheticsMultilocationAlertConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#warning SyntheticsMultilocationAlertCondition#warning}
  */
  readonly warning?: SyntheticsMultilocationAlertConditionWarning;
}
export interface SyntheticsMultilocationAlertConditionCritical {
  /**
  * The minimum number of monitor locations that must be concurrently failing before a violation is opened.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#threshold SyntheticsMultilocationAlertCondition#threshold}
  */
  readonly threshold: number;
}

function syntheticsMultilocationAlertConditionCriticalToTerraform(struct?: SyntheticsMultilocationAlertConditionCriticalOutputReference | SyntheticsMultilocationAlertConditionCritical): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export class SyntheticsMultilocationAlertConditionCriticalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
  }
}
export interface SyntheticsMultilocationAlertConditionWarning {
  /**
  * The minimum number of monitor locations that must be concurrently failing before a violation is opened.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html#threshold SyntheticsMultilocationAlertCondition#threshold}
  */
  readonly threshold: number;
}

function syntheticsMultilocationAlertConditionWarningToTerraform(struct?: SyntheticsMultilocationAlertConditionWarningOutputReference | SyntheticsMultilocationAlertConditionWarning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export class SyntheticsMultilocationAlertConditionWarningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html newrelic_synthetics_multilocation_alert_condition}
*/
export class SyntheticsMultilocationAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_synthetics_multilocation_alert_condition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_multilocation_alert_condition.html newrelic_synthetics_multilocation_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsMultilocationAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsMultilocationAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_synthetics_multilocation_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._entities = config.entities;
    this._name = config.name;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._violationTimeLimitSeconds = config.violationTimeLimitSeconds;
    this._critical = config.critical;
    this._warning = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // entities - computed: false, optional: false, required: true
  private _entities?: string[]; 
  public get entities() {
    return this.getListAttribute('entities');
  }
  public set entities(value: string[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string | undefined; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string | undefined) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl
  }

  // violation_time_limit_seconds - computed: false, optional: false, required: true
  private _violationTimeLimitSeconds?: number; 
  public get violationTimeLimitSeconds() {
    return this.getNumberAttribute('violation_time_limit_seconds');
  }
  public set violationTimeLimitSeconds(value: number) {
    this._violationTimeLimitSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTimeLimitSecondsInput() {
    return this._violationTimeLimitSeconds
  }

  // critical - computed: false, optional: false, required: true
  private _critical?: SyntheticsMultilocationAlertConditionCritical; 
  private __criticalOutput = new SyntheticsMultilocationAlertConditionCriticalOutputReference(this as any, "critical", true);
  public get critical() {
    return this.__criticalOutput;
  }
  public putCritical(value: SyntheticsMultilocationAlertConditionCritical) {
    this._critical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: SyntheticsMultilocationAlertConditionWarning | undefined; 
  private __warningOutput = new SyntheticsMultilocationAlertConditionWarningOutputReference(this as any, "warning", true);
  public get warning() {
    return this.__warningOutput;
  }
  public putWarning(value: SyntheticsMultilocationAlertConditionWarning | undefined) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      entities: cdktf.listMapper(cdktf.stringToTerraform)(this._entities),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      violation_time_limit_seconds: cdktf.numberToTerraform(this._violationTimeLimitSeconds),
      critical: syntheticsMultilocationAlertConditionCriticalToTerraform(this._critical),
      warning: syntheticsMultilocationAlertConditionWarningToTerraform(this._warning),
    };
  }
}
