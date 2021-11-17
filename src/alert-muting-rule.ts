// https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id of the MutingRule..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#account_id AlertMutingRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The description of the MutingRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#description AlertMutingRule#description}
  */
  readonly description?: string;
  /**
  * Whether the MutingRule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#enabled AlertMutingRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the MutingRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#name AlertMutingRule#name}
  */
  readonly name: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#condition AlertMutingRule#condition}
  */
  readonly condition: AlertMutingRuleCondition;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#schedule AlertMutingRule#schedule}
  */
  readonly schedule?: AlertMutingRuleSchedule;
}
export interface AlertMutingRuleConditionConditions {
  /**
  * The attribute on a violation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#attribute AlertMutingRule#attribute}
  */
  readonly attribute: string;
  /**
  * The operator used to compare the attribute's value with the supplied value(s).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * The value(s) to compare against the attribute's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#values AlertMutingRule#values}
  */
  readonly values: string[];
}

function alertMutingRuleConditionConditionsToTerraform(struct?: AlertMutingRuleConditionConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlertMutingRuleCondition {
  /**
  * The operator used to combine all the MutingRuleConditions within the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#conditions AlertMutingRule#conditions}
  */
  readonly conditions: AlertMutingRuleConditionConditions[];
}

function alertMutingRuleConditionToTerraform(struct?: AlertMutingRuleConditionOutputReference | AlertMutingRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    conditions: cdktf.listMapper(alertMutingRuleConditionConditionsToTerraform)(struct!.conditions),
  }
}

export class AlertMutingRuleConditionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: AlertMutingRuleConditionConditions[]; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: AlertMutingRuleConditionConditions[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions
  }
}
export interface AlertMutingRuleSchedule {
  /**
  * The datetime stamp when the MutingRule schedule should stop repeating.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#end_repeat AlertMutingRule#end_repeat}
  */
  readonly endRepeat?: string;
  /**
  * The datetime stamp representing when the MutingRule should end.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#end_time AlertMutingRule#end_time}
  */
  readonly endTime?: string;
  /**
  * The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#repeat AlertMutingRule#repeat}
  */
  readonly repeat?: string;
  /**
  * The number of times the MutingRule schedule should repeat.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#repeat_count AlertMutingRule#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * The datetime stamp representing when the MutingRule should start.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#start_time AlertMutingRule#start_time}
  */
  readonly startTime?: string;
  /**
  * The time zone that applies to the MutingRule schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#time_zone AlertMutingRule#time_zone}
  */
  readonly timeZone: string;
  /**
  * The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html#weekly_repeat_days AlertMutingRule#weekly_repeat_days}
  */
  readonly weeklyRepeatDays?: string[];
}

function alertMutingRuleScheduleToTerraform(struct?: AlertMutingRuleScheduleOutputReference | AlertMutingRuleSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_repeat: cdktf.stringToTerraform(struct!.endRepeat),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekly_repeat_days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weeklyRepeatDays),
  }
}

export class AlertMutingRuleScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_repeat - computed: false, optional: true, required: false
  private _endRepeat?: string | undefined; 
  public get endRepeat() {
    return this.getStringAttribute('end_repeat');
  }
  public set endRepeat(value: string | undefined) {
    this._endRepeat = value;
  }
  public resetEndRepeat() {
    this._endRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endRepeatInput() {
    return this._endRepeat
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string | undefined; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string | undefined) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat
  }

  // repeat_count - computed: false, optional: true, required: false
  private _repeatCount?: number | undefined; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number | undefined) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // weekly_repeat_days - computed: false, optional: true, required: false
  private _weeklyRepeatDays?: string[] | undefined; 
  public get weeklyRepeatDays() {
    return this.getListAttribute('weekly_repeat_days');
  }
  public set weeklyRepeatDays(value: string[] | undefined) {
    this._weeklyRepeatDays = value;
  }
  public resetWeeklyRepeatDays() {
    this._weeklyRepeatDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRepeatDaysInput() {
    return this._weeklyRepeatDays
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html newrelic_alert_muting_rule}
*/
export class AlertMutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_alert_muting_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule.html newrelic_alert_muting_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_muting_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._condition = config.condition;
    this._schedule = config.schedule;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // condition - computed: false, optional: false, required: true
  private _condition?: AlertMutingRuleCondition; 
  private __conditionOutput = new AlertMutingRuleConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this.__conditionOutput;
  }
  public putCondition(value: AlertMutingRuleCondition) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: AlertMutingRuleSchedule | undefined; 
  private __scheduleOutput = new AlertMutingRuleScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: AlertMutingRuleSchedule | undefined) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      condition: alertMutingRuleConditionToTerraform(this._condition),
      schedule: alertMutingRuleScheduleToTerraform(this._schedule),
    };
  }
}
