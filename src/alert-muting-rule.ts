// https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account id of the MutingRule..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#account_id AlertMutingRule#account_id}
  */
  readonly accountId?: number;
  /**
  * The description of the MutingRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#description AlertMutingRule#description}
  */
  readonly description?: string;
  /**
  * Whether the MutingRule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#enabled AlertMutingRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the MutingRule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#name AlertMutingRule#name}
  */
  readonly name: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#condition AlertMutingRule#condition}
  */
  readonly condition: AlertMutingRuleCondition;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#schedule AlertMutingRule#schedule}
  */
  readonly schedule?: AlertMutingRuleSchedule;
}
export interface AlertMutingRuleConditionConditions {
  /**
  * The attribute on a violation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#attribute AlertMutingRule#attribute}
  */
  readonly attribute: string;
  /**
  * The operator used to compare the attribute's value with the supplied value(s).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * The value(s) to compare against the attribute's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#values AlertMutingRule#values}
  */
  readonly values: string[];
}

export function alertMutingRuleConditionConditionsToTerraform(struct?: AlertMutingRuleConditionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#operator AlertMutingRule#operator}
  */
  readonly operator: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#conditions AlertMutingRule#conditions}
  */
  readonly conditions: AlertMutingRuleConditionConditions[] | cdktf.IResolvable;
}

export function alertMutingRuleConditionToTerraform(struct?: AlertMutingRuleConditionOutputReference | AlertMutingRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    conditions: cdktf.listMapper(alertMutingRuleConditionConditionsToTerraform)(struct!.conditions),
  }
}

export class AlertMutingRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertMutingRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMutingRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._conditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._conditions = value.conditions;
    }
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
    return this._operator;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: AlertMutingRuleConditionConditions[] | cdktf.IResolvable; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions');
  }
  public set conditions(value: AlertMutingRuleConditionConditions[] | cdktf.IResolvable) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface AlertMutingRuleSchedule {
  /**
  * The datetime stamp when the MutingRule schedule should stop repeating.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}
  */
  readonly endRepeat?: string;
  /**
  * The datetime stamp representing when the MutingRule should end.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#end_time AlertMutingRule#end_time}
  */
  readonly endTime?: string;
  /**
  * The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#repeat AlertMutingRule#repeat}
  */
  readonly repeat?: string;
  /**
  * The number of times the MutingRule schedule should repeat.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * The datetime stamp representing when the MutingRule should start.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#start_time AlertMutingRule#start_time}
  */
  readonly startTime?: string;
  /**
  * The time zone that applies to the MutingRule schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#time_zone AlertMutingRule#time_zone}
  */
  readonly timeZone: string;
  /**
  * The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}
  */
  readonly weeklyRepeatDays?: string[];
}

export function alertMutingRuleScheduleToTerraform(struct?: AlertMutingRuleScheduleOutputReference | AlertMutingRuleSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertMutingRuleSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endRepeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.endRepeat = this._endRepeat;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weeklyRepeatDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRepeatDays = this._weeklyRepeatDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMutingRuleSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endRepeat = undefined;
      this._endTime = undefined;
      this._repeat = undefined;
      this._repeatCount = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
      this._weeklyRepeatDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endRepeat = value.endRepeat;
      this._endTime = value.endTime;
      this._repeat = value.repeat;
      this._repeatCount = value.repeatCount;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
      this._weeklyRepeatDays = value.weeklyRepeatDays;
    }
  }

  // end_repeat - computed: false, optional: true, required: false
  private _endRepeat?: string; 
  public get endRepeat() {
    return this.getStringAttribute('end_repeat');
  }
  public set endRepeat(value: string) {
    this._endRepeat = value;
  }
  public resetEndRepeat() {
    this._endRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endRepeatInput() {
    return this._endRepeat;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // repeat_count - computed: false, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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
    return this._timeZone;
  }

  // weekly_repeat_days - computed: false, optional: true, required: false
  private _weeklyRepeatDays?: string[]; 
  public get weeklyRepeatDays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekly_repeat_days'));
  }
  public set weeklyRepeatDays(value: string[]) {
    this._weeklyRepeatDays = value;
  }
  public resetWeeklyRepeatDays() {
    this._weeklyRepeatDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRepeatDaysInput() {
    return this._weeklyRepeatDays;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule newrelic_alert_muting_rule}
*/
export class AlertMutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "newrelic_alert_muting_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/alert_muting_rule newrelic_alert_muting_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_alert_muting_rule',
      terraformGeneratorMetadata: {
        providerName: 'newrelic',
        providerVersion: '2.42.0',
        providerVersionConstraint: '~> 2.32'
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
    this._condition.internalValue = config.condition;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
    return this._name;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AlertMutingRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AlertMutingRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AlertMutingRuleScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AlertMutingRuleSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
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
      condition: alertMutingRuleConditionToTerraform(this._condition.internalValue),
      schedule: alertMutingRuleScheduleToTerraform(this._schedule.internalValue),
    };
  }
}
