// https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The operator used to evaluate the threshold value. Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#comparison InfraAlertCondition#comparison}
  */
  readonly comparison?: string;
  /**
  * The description of the Infrastructure alert condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#description InfraAlertCondition#description}
  */
  readonly description?: string;
  /**
  * Whether the condition is turned on or off. Valid values are true and false. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#enabled InfraAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#event InfraAlertCondition#event}
  */
  readonly event?: string;
  /**
  * For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#integration_provider InfraAlertCondition#integration_provider}
  */
  readonly integrationProvider?: string;
  /**
  * The Infrastructure alert condition's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#name InfraAlertCondition#name}
  */
  readonly name: string;
  /**
  * The ID of the alert policy where this condition should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#policy_id InfraAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#process_where InfraAlertCondition#process_where}
  */
  readonly processWhere?: string;
  /**
  * Runbook URL to display in notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#runbook_url InfraAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The attribute name to identify the metric being targeted; for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#select InfraAlertCondition#select}
  */
  readonly select?: string;
  /**
  * The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#type InfraAlertCondition#type}
  */
  readonly type: string;
  /**
  * Determines how much time, in hours, will pass before a violation is automatically closed. Valid values are 1, 2, 4, 8, 12, 24, 48, or 72
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#violation_close_timer InfraAlertCondition#violation_close_timer}
  */
  readonly violationCloseTimer?: number;
  /**
  * If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#where InfraAlertCondition#where}
  */
  readonly where?: string;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#critical InfraAlertCondition#critical}
  */
  readonly critical?: InfraAlertConditionCritical;
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#warning InfraAlertCondition#warning}
  */
  readonly warning?: InfraAlertConditionWarning;
}
export interface InfraAlertConditionCritical {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#duration InfraAlertCondition#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#time_function InfraAlertCondition#time_function}
  */
  readonly timeFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#value InfraAlertCondition#value}
  */
  readonly value?: number;
}

function infraAlertConditionCriticalToTerraform(struct?: InfraAlertConditionCriticalOutputReference | InfraAlertConditionCritical): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class InfraAlertConditionCriticalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // time_function - computed: false, optional: true, required: false
  private _timeFunction?: string | undefined; 
  public get timeFunction() {
    return this.getStringAttribute('time_function');
  }
  public set timeFunction(value: string | undefined) {
    this._timeFunction = value;
  }
  public resetTimeFunction() {
    this._timeFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFunctionInput() {
    return this._timeFunction
  }

  // value - computed: false, optional: true, required: false
  private _value?: number | undefined; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface InfraAlertConditionWarning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#duration InfraAlertCondition#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#time_function InfraAlertCondition#time_function}
  */
  readonly timeFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html#value InfraAlertCondition#value}
  */
  readonly value?: number;
}

function infraAlertConditionWarningToTerraform(struct?: InfraAlertConditionWarningOutputReference | InfraAlertConditionWarning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class InfraAlertConditionWarningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // time_function - computed: false, optional: true, required: false
  private _timeFunction?: string | undefined; 
  public get timeFunction() {
    return this.getStringAttribute('time_function');
  }
  public set timeFunction(value: string | undefined) {
    this._timeFunction = value;
  }
  public resetTimeFunction() {
    this._timeFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFunctionInput() {
    return this._timeFunction
  }

  // value - computed: false, optional: true, required: false
  private _value?: number | undefined; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html newrelic_infra_alert_condition}
*/
export class InfraAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_infra_alert_condition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/infra_alert_condition.html newrelic_infra_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: InfraAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_infra_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comparison = config.comparison;
    this._description = config.description;
    this._enabled = config.enabled;
    this._event = config.event;
    this._integrationProvider = config.integrationProvider;
    this._name = config.name;
    this._policyId = config.policyId;
    this._processWhere = config.processWhere;
    this._runbookUrl = config.runbookUrl;
    this._select = config.select;
    this._type = config.type;
    this._violationCloseTimer = config.violationCloseTimer;
    this._where = config.where;
    this._critical = config.critical;
    this._warning = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string | undefined; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string | undefined) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

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

  // event - computed: true, optional: true, required: false
  private _event?: string | undefined; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string | undefined) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_provider - computed: false, optional: true, required: false
  private _integrationProvider?: string | undefined; 
  public get integrationProvider() {
    return this.getStringAttribute('integration_provider');
  }
  public set integrationProvider(value: string | undefined) {
    this._integrationProvider = value;
  }
  public resetIntegrationProvider() {
    this._integrationProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationProviderInput() {
    return this._integrationProvider
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

  // process_where - computed: false, optional: true, required: false
  private _processWhere?: string | undefined; 
  public get processWhere() {
    return this.getStringAttribute('process_where');
  }
  public set processWhere(value: string | undefined) {
    this._processWhere = value;
  }
  public resetProcessWhere() {
    this._processWhere = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processWhereInput() {
    return this._processWhere
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

  // select - computed: false, optional: true, required: false
  private _select?: string | undefined; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string | undefined) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // violation_close_timer - computed: false, optional: true, required: false
  private _violationCloseTimer?: number | undefined; 
  public get violationCloseTimer() {
    return this.getNumberAttribute('violation_close_timer');
  }
  public set violationCloseTimer(value: number | undefined) {
    this._violationCloseTimer = value;
  }
  public resetViolationCloseTimer() {
    this._violationCloseTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationCloseTimerInput() {
    return this._violationCloseTimer
  }

  // where - computed: false, optional: true, required: false
  private _where?: string | undefined; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string | undefined) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: InfraAlertConditionCritical | undefined; 
  private __criticalOutput = new InfraAlertConditionCriticalOutputReference(this as any, "critical", true);
  public get critical() {
    return this.__criticalOutput;
  }
  public putCritical(value: InfraAlertConditionCritical | undefined) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: InfraAlertConditionWarning | undefined; 
  private __warningOutput = new InfraAlertConditionWarningOutputReference(this as any, "warning", true);
  public get warning() {
    return this.__warningOutput;
  }
  public putWarning(value: InfraAlertConditionWarning | undefined) {
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
      comparison: cdktf.stringToTerraform(this._comparison),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event: cdktf.stringToTerraform(this._event),
      integration_provider: cdktf.stringToTerraform(this._integrationProvider),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.numberToTerraform(this._policyId),
      process_where: cdktf.stringToTerraform(this._processWhere),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      select: cdktf.stringToTerraform(this._select),
      type: cdktf.stringToTerraform(this._type),
      violation_close_timer: cdktf.numberToTerraform(this._violationCloseTimer),
      where: cdktf.stringToTerraform(this._where),
      critical: infraAlertConditionCriticalToTerraform(this._critical),
      warning: infraAlertConditionWarningToTerraform(this._warning),
    };
  }
}
