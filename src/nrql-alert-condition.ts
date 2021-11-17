// https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NrqlAlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The New Relic account ID for managing your NRQL alert conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#account_id NrqlAlertCondition#account_id}
  */
  readonly accountId?: number;
  /**
  * How long we wait for data that belongs in each aggregation window. Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_delay NrqlAlertCondition#aggregation_delay}
  */
  readonly aggregationDelay?: number;
  /**
  * The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for violations. Default is CADENCE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_method NrqlAlertCondition#aggregation_method}
  */
  readonly aggregationMethod?: string;
  /**
  * How long we wait after each data point arrives to make sure we've processed the whole batch. Use aggregationTimer with the EVENT_TIMER aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_timer NrqlAlertCondition#aggregation_timer}
  */
  readonly aggregationTimer?: number;
  /**
  * The duration of the time window used to evaluate the NRQL query, in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#aggregation_window NrqlAlertCondition#aggregation_window}
  */
  readonly aggregationWindow?: number;
  /**
  * The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#baseline_direction NrqlAlertCondition#baseline_direction}
  */
  readonly baselineDirection?: string;
  /**
  * Whether to close all open violations when the signal expires.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}
  */
  readonly closeViolationsOnExpiration?: boolean | cdktf.IResolvable;
  /**
  * The description of the NRQL alert condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#description NrqlAlertCondition#description}
  */
  readonly description?: string;
  /**
  * Whether or not to enable the alert condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#enabled NrqlAlertCondition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Number of expected groups when using outlier detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#expected_groups NrqlAlertCondition#expected_groups}
  */
  readonly expectedGroups?: number;
  /**
  * The amount of time (in seconds) to wait before considering the signal expired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#expiration_duration NrqlAlertCondition#expiration_duration}
  */
  readonly expirationDuration?: number;
  /**
  * Which strategy to use when filling gaps in the signal. If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#fill_option NrqlAlertCondition#fill_option}
  */
  readonly fillOption?: string;
  /**
  * If using the 'static' fill option, this value will be used for filling gaps in the signal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#fill_value NrqlAlertCondition#fill_value}
  */
  readonly fillValue?: number;
  /**
  * Whether to look for a convergence of groups when using outlier detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#ignore_overlap NrqlAlertCondition#ignore_overlap}
  */
  readonly ignoreOverlap?: boolean | cdktf.IResolvable;
  /**
  * The title of the condition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#name NrqlAlertCondition#name}
  */
  readonly name: string;
  /**
  * Whether to create a new violation to capture that the signal expired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}
  */
  readonly openViolationOnExpiration?: boolean | cdktf.IResolvable;
  /**
  * Whether overlapping groups should produce a violation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#open_violation_on_group_overlap NrqlAlertCondition#open_violation_on_group_overlap}
  */
  readonly openViolationOnGroupOverlap?: boolean | cdktf.IResolvable;
  /**
  * The ID of the policy where this condition should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#policy_id NrqlAlertCondition#policy_id}
  */
  readonly policyId: number;
  /**
  * Runbook URL to display in notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#runbook_url NrqlAlertCondition#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier' (deprecated).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#type NrqlAlertCondition#type}
  */
  readonly type?: string;
  /**
  * Valid values are: 'single_value' or 'sum'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#value_function NrqlAlertCondition#value_function}
  */
  readonly valueFunction?: string;
  /**
  * Sets a time limit, in hours, that will automatically force-close a long-lasting violation after the time limit you select. Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#violation_time_limit NrqlAlertCondition#violation_time_limit}
  */
  readonly violationTimeLimit?: string;
  /**
  * Sets a time limit, in seconds, that will automatically force-close a long-lasting violation after the time limit you select.  Must be in the range of 300 to 2592000 (inclusive)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}
  */
  readonly violationTimeLimitSeconds?: number;
  /**
  * critical block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#critical NrqlAlertCondition#critical}
  */
  readonly critical?: NrqlAlertConditionCritical;
  /**
  * nrql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#nrql NrqlAlertCondition#nrql}
  */
  readonly nrql: NrqlAlertConditionNrql;
  /**
  * term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#term NrqlAlertCondition#term}
  */
  readonly term?: NrqlAlertConditionTerm[];
  /**
  * warning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#warning NrqlAlertCondition#warning}
  */
  readonly warning?: NrqlAlertConditionWarning;
}
export interface NrqlAlertConditionCritical {
  /**
  * In minutes, must be in the range of 1 to 120 (inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}
  */
  readonly duration?: number;
  /**
  * One of (above, below, equals). Defaults to 'equals'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * Must be 0 or greater. For baseline conditions must be in range [1, 1000].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * The duration, in seconds, that the threshold must violate in order to create a violation. Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}
  */
  readonly thresholdDuration?: number;
  /**
  * The criteria for how many data points must be in violation for the specified threshold duration. Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}
  */
  readonly thresholdOccurrences?: string;
  /**
  * Valid values are: 'all' or 'any'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}
  */
  readonly timeFunction?: string;
}

function nrqlAlertConditionCriticalToTerraform(struct?: NrqlAlertConditionCriticalOutputReference | NrqlAlertConditionCritical): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_duration: cdktf.numberToTerraform(struct!.thresholdDuration),
    threshold_occurrences: cdktf.stringToTerraform(struct!.thresholdOccurrences),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
  }
}

export class NrqlAlertConditionCriticalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number | undefined; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number | undefined) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string | undefined; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string | undefined) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
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

  // threshold_duration - computed: false, optional: true, required: false
  private _thresholdDuration?: number | undefined; 
  public get thresholdDuration() {
    return this.getNumberAttribute('threshold_duration');
  }
  public set thresholdDuration(value: number | undefined) {
    this._thresholdDuration = value;
  }
  public resetThresholdDuration() {
    this._thresholdDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDurationInput() {
    return this._thresholdDuration
  }

  // threshold_occurrences - computed: false, optional: true, required: false
  private _thresholdOccurrences?: string | undefined; 
  public get thresholdOccurrences() {
    return this.getStringAttribute('threshold_occurrences');
  }
  public set thresholdOccurrences(value: string | undefined) {
    this._thresholdOccurrences = value;
  }
  public resetThresholdOccurrences() {
    this._thresholdOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdOccurrencesInput() {
    return this._thresholdOccurrences
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
}
export interface NrqlAlertConditionNrql {
  /**
  * NRQL queries are evaluated in one-minute time windows. The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#evaluation_offset NrqlAlertCondition#evaluation_offset}
  */
  readonly evaluationOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#query NrqlAlertCondition#query}
  */
  readonly query: string;
  /**
  * NRQL queries are evaluated in one-minute time windows. The start time depends on the value you provide in the NRQL condition's `since_value`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#since_value NrqlAlertCondition#since_value}
  */
  readonly sinceValue?: string;
}

function nrqlAlertConditionNrqlToTerraform(struct?: NrqlAlertConditionNrqlOutputReference | NrqlAlertConditionNrql): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_offset: cdktf.numberToTerraform(struct!.evaluationOffset),
    query: cdktf.stringToTerraform(struct!.query),
    since_value: cdktf.stringToTerraform(struct!.sinceValue),
  }
}

export class NrqlAlertConditionNrqlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // evaluation_offset - computed: false, optional: true, required: false
  private _evaluationOffset?: number | undefined; 
  public get evaluationOffset() {
    return this.getNumberAttribute('evaluation_offset');
  }
  public set evaluationOffset(value: number | undefined) {
    this._evaluationOffset = value;
  }
  public resetEvaluationOffset() {
    this._evaluationOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOffsetInput() {
    return this._evaluationOffset
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // since_value - computed: false, optional: true, required: false
  private _sinceValue?: string | undefined; 
  public get sinceValue() {
    return this.getStringAttribute('since_value');
  }
  public set sinceValue(value: string | undefined) {
    this._sinceValue = value;
  }
  public resetSinceValue() {
    this._sinceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinceValueInput() {
    return this._sinceValue
  }
}
export interface NrqlAlertConditionTerm {
  /**
  * In minutes, must be in the range of 1 to 120 (inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}
  */
  readonly duration?: number;
  /**
  * One of (above, below, equals). Defaults to 'equals'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#priority NrqlAlertCondition#priority}
  */
  readonly priority?: string;
  /**
  * Must be 0 or greater. For baseline conditions must be in range [1, 1000].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * The duration, in seconds, that the threshold must violate in order to create a violation. Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}
  */
  readonly thresholdDuration?: number;
  /**
  * The criteria for how many data points must be in violation for the specified threshold duration. Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}
  */
  readonly thresholdOccurrences?: string;
  /**
  * Valid values are: 'all' or 'any'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}
  */
  readonly timeFunction?: string;
}

function nrqlAlertConditionTermToTerraform(struct?: NrqlAlertConditionTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    operator: cdktf.stringToTerraform(struct!.operator),
    priority: cdktf.stringToTerraform(struct!.priority),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_duration: cdktf.numberToTerraform(struct!.thresholdDuration),
    threshold_occurrences: cdktf.stringToTerraform(struct!.thresholdOccurrences),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
  }
}

export interface NrqlAlertConditionWarning {
  /**
  * In minutes, must be in the range of 1 to 120 (inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#duration NrqlAlertCondition#duration}
  */
  readonly duration?: number;
  /**
  * One of (above, below, equals). Defaults to 'equals'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#operator NrqlAlertCondition#operator}
  */
  readonly operator?: string;
  /**
  * Must be 0 or greater. For baseline conditions must be in range [1, 1000].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold NrqlAlertCondition#threshold}
  */
  readonly threshold: number;
  /**
  * The duration, in seconds, that the threshold must violate in order to create a violation. Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-3600 seconds for baseline and outlier conditions, within 120-7200 seconds for static conditions with the sum value function, and within 60-7200 seconds for static conditions with the single_value value function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_duration NrqlAlertCondition#threshold_duration}
  */
  readonly thresholdDuration?: number;
  /**
  * The criteria for how many data points must be in violation for the specified threshold duration. Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#threshold_occurrences NrqlAlertCondition#threshold_occurrences}
  */
  readonly thresholdOccurrences?: string;
  /**
  * Valid values are: 'all' or 'any'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html#time_function NrqlAlertCondition#time_function}
  */
  readonly timeFunction?: string;
}

function nrqlAlertConditionWarningToTerraform(struct?: NrqlAlertConditionWarningOutputReference | NrqlAlertConditionWarning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_duration: cdktf.numberToTerraform(struct!.thresholdDuration),
    threshold_occurrences: cdktf.stringToTerraform(struct!.thresholdOccurrences),
    time_function: cdktf.stringToTerraform(struct!.timeFunction),
  }
}

export class NrqlAlertConditionWarningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number | undefined; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number | undefined) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string | undefined; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string | undefined) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
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

  // threshold_duration - computed: false, optional: true, required: false
  private _thresholdDuration?: number | undefined; 
  public get thresholdDuration() {
    return this.getNumberAttribute('threshold_duration');
  }
  public set thresholdDuration(value: number | undefined) {
    this._thresholdDuration = value;
  }
  public resetThresholdDuration() {
    this._thresholdDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDurationInput() {
    return this._thresholdDuration
  }

  // threshold_occurrences - computed: false, optional: true, required: false
  private _thresholdOccurrences?: string | undefined; 
  public get thresholdOccurrences() {
    return this.getStringAttribute('threshold_occurrences');
  }
  public set thresholdOccurrences(value: string | undefined) {
    this._thresholdOccurrences = value;
  }
  public resetThresholdOccurrences() {
    this._thresholdOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdOccurrencesInput() {
    return this._thresholdOccurrences
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html newrelic_nrql_alert_condition}
*/
export class NrqlAlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "newrelic_nrql_alert_condition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/newrelic/r/nrql_alert_condition.html newrelic_nrql_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NrqlAlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: NrqlAlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'newrelic_nrql_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'newrelic'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._aggregationDelay = config.aggregationDelay;
    this._aggregationMethod = config.aggregationMethod;
    this._aggregationTimer = config.aggregationTimer;
    this._aggregationWindow = config.aggregationWindow;
    this._baselineDirection = config.baselineDirection;
    this._closeViolationsOnExpiration = config.closeViolationsOnExpiration;
    this._description = config.description;
    this._enabled = config.enabled;
    this._expectedGroups = config.expectedGroups;
    this._expirationDuration = config.expirationDuration;
    this._fillOption = config.fillOption;
    this._fillValue = config.fillValue;
    this._ignoreOverlap = config.ignoreOverlap;
    this._name = config.name;
    this._openViolationOnExpiration = config.openViolationOnExpiration;
    this._openViolationOnGroupOverlap = config.openViolationOnGroupOverlap;
    this._policyId = config.policyId;
    this._runbookUrl = config.runbookUrl;
    this._type = config.type;
    this._valueFunction = config.valueFunction;
    this._violationTimeLimit = config.violationTimeLimit;
    this._violationTimeLimitSeconds = config.violationTimeLimitSeconds;
    this._critical = config.critical;
    this._nrql = config.nrql;
    this._term = config.term;
    this._warning = config.warning;
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

  // aggregation_delay - computed: false, optional: true, required: false
  private _aggregationDelay?: number | undefined; 
  public get aggregationDelay() {
    return this.getNumberAttribute('aggregation_delay');
  }
  public set aggregationDelay(value: number | undefined) {
    this._aggregationDelay = value;
  }
  public resetAggregationDelay() {
    this._aggregationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationDelayInput() {
    return this._aggregationDelay
  }

  // aggregation_method - computed: false, optional: true, required: false
  private _aggregationMethod?: string | undefined; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string | undefined) {
    this._aggregationMethod = value;
  }
  public resetAggregationMethod() {
    this._aggregationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod
  }

  // aggregation_timer - computed: false, optional: true, required: false
  private _aggregationTimer?: number | undefined; 
  public get aggregationTimer() {
    return this.getNumberAttribute('aggregation_timer');
  }
  public set aggregationTimer(value: number | undefined) {
    this._aggregationTimer = value;
  }
  public resetAggregationTimer() {
    this._aggregationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTimerInput() {
    return this._aggregationTimer
  }

  // aggregation_window - computed: true, optional: true, required: false
  private _aggregationWindow?: number | undefined; 
  public get aggregationWindow() {
    return this.getNumberAttribute('aggregation_window');
  }
  public set aggregationWindow(value: number | undefined) {
    this._aggregationWindow = value;
  }
  public resetAggregationWindow() {
    this._aggregationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationWindowInput() {
    return this._aggregationWindow
  }

  // baseline_direction - computed: false, optional: true, required: false
  private _baselineDirection?: string | undefined; 
  public get baselineDirection() {
    return this.getStringAttribute('baseline_direction');
  }
  public set baselineDirection(value: string | undefined) {
    this._baselineDirection = value;
  }
  public resetBaselineDirection() {
    this._baselineDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineDirectionInput() {
    return this._baselineDirection
  }

  // close_violations_on_expiration - computed: false, optional: true, required: false
  private _closeViolationsOnExpiration?: boolean | cdktf.IResolvable | undefined; 
  public get closeViolationsOnExpiration() {
    return this.getBooleanAttribute('close_violations_on_expiration') as any;
  }
  public set closeViolationsOnExpiration(value: boolean | cdktf.IResolvable | undefined) {
    this._closeViolationsOnExpiration = value;
  }
  public resetCloseViolationsOnExpiration() {
    this._closeViolationsOnExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeViolationsOnExpirationInput() {
    return this._closeViolationsOnExpiration
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

  // expected_groups - computed: false, optional: true, required: false
  private _expectedGroups?: number | undefined; 
  public get expectedGroups() {
    return this.getNumberAttribute('expected_groups');
  }
  public set expectedGroups(value: number | undefined) {
    this._expectedGroups = value;
  }
  public resetExpectedGroups() {
    this._expectedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedGroupsInput() {
    return this._expectedGroups
  }

  // expiration_duration - computed: false, optional: true, required: false
  private _expirationDuration?: number | undefined; 
  public get expirationDuration() {
    return this.getNumberAttribute('expiration_duration');
  }
  public set expirationDuration(value: number | undefined) {
    this._expirationDuration = value;
  }
  public resetExpirationDuration() {
    this._expirationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDurationInput() {
    return this._expirationDuration
  }

  // fill_option - computed: false, optional: true, required: false
  private _fillOption?: string | undefined; 
  public get fillOption() {
    return this.getStringAttribute('fill_option');
  }
  public set fillOption(value: string | undefined) {
    this._fillOption = value;
  }
  public resetFillOption() {
    this._fillOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillOptionInput() {
    return this._fillOption
  }

  // fill_value - computed: false, optional: true, required: false
  private _fillValue?: number | undefined; 
  public get fillValue() {
    return this.getNumberAttribute('fill_value');
  }
  public set fillValue(value: number | undefined) {
    this._fillValue = value;
  }
  public resetFillValue() {
    this._fillValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillValueInput() {
    return this._fillValue
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_overlap - computed: false, optional: true, required: false
  private _ignoreOverlap?: boolean | cdktf.IResolvable | undefined; 
  public get ignoreOverlap() {
    return this.getBooleanAttribute('ignore_overlap') as any;
  }
  public set ignoreOverlap(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreOverlap = value;
  }
  public resetIgnoreOverlap() {
    this._ignoreOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOverlapInput() {
    return this._ignoreOverlap
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

  // open_violation_on_expiration - computed: false, optional: true, required: false
  private _openViolationOnExpiration?: boolean | cdktf.IResolvable | undefined; 
  public get openViolationOnExpiration() {
    return this.getBooleanAttribute('open_violation_on_expiration') as any;
  }
  public set openViolationOnExpiration(value: boolean | cdktf.IResolvable | undefined) {
    this._openViolationOnExpiration = value;
  }
  public resetOpenViolationOnExpiration() {
    this._openViolationOnExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openViolationOnExpirationInput() {
    return this._openViolationOnExpiration
  }

  // open_violation_on_group_overlap - computed: false, optional: true, required: false
  private _openViolationOnGroupOverlap?: boolean | cdktf.IResolvable | undefined; 
  public get openViolationOnGroupOverlap() {
    return this.getBooleanAttribute('open_violation_on_group_overlap') as any;
  }
  public set openViolationOnGroupOverlap(value: boolean | cdktf.IResolvable | undefined) {
    this._openViolationOnGroupOverlap = value;
  }
  public resetOpenViolationOnGroupOverlap() {
    this._openViolationOnGroupOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openViolationOnGroupOverlapInput() {
    return this._openViolationOnGroupOverlap
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

  // type - computed: false, optional: true, required: false
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

  // value_function - computed: false, optional: true, required: false
  private _valueFunction?: string | undefined; 
  public get valueFunction() {
    return this.getStringAttribute('value_function');
  }
  public set valueFunction(value: string | undefined) {
    this._valueFunction = value;
  }
  public resetValueFunction() {
    this._valueFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFunctionInput() {
    return this._valueFunction
  }

  // violation_time_limit - computed: true, optional: true, required: false
  private _violationTimeLimit?: string | undefined; 
  public get violationTimeLimit() {
    return this.getStringAttribute('violation_time_limit');
  }
  public set violationTimeLimit(value: string | undefined) {
    this._violationTimeLimit = value;
  }
  public resetViolationTimeLimit() {
    this._violationTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTimeLimitInput() {
    return this._violationTimeLimit
  }

  // violation_time_limit_seconds - computed: false, optional: true, required: false
  private _violationTimeLimitSeconds?: number | undefined; 
  public get violationTimeLimitSeconds() {
    return this.getNumberAttribute('violation_time_limit_seconds');
  }
  public set violationTimeLimitSeconds(value: number | undefined) {
    this._violationTimeLimitSeconds = value;
  }
  public resetViolationTimeLimitSeconds() {
    this._violationTimeLimitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTimeLimitSecondsInput() {
    return this._violationTimeLimitSeconds
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: NrqlAlertConditionCritical | undefined; 
  private __criticalOutput = new NrqlAlertConditionCriticalOutputReference(this as any, "critical", true);
  public get critical() {
    return this.__criticalOutput;
  }
  public putCritical(value: NrqlAlertConditionCritical | undefined) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: NrqlAlertConditionNrql; 
  private __nrqlOutput = new NrqlAlertConditionNrqlOutputReference(this as any, "nrql", true);
  public get nrql() {
    return this.__nrqlOutput;
  }
  public putNrql(value: NrqlAlertConditionNrql) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql
  }

  // term - computed: false, optional: true, required: false
  private _term?: NrqlAlertConditionTerm[] | undefined; 
  public get term() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('term') as any;
  }
  public set term(value: NrqlAlertConditionTerm[] | undefined) {
    this._term = value;
  }
  public resetTerm() {
    this._term = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: NrqlAlertConditionWarning | undefined; 
  private __warningOutput = new NrqlAlertConditionWarningOutputReference(this as any, "warning", true);
  public get warning() {
    return this.__warningOutput;
  }
  public putWarning(value: NrqlAlertConditionWarning | undefined) {
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
      account_id: cdktf.numberToTerraform(this._accountId),
      aggregation_delay: cdktf.numberToTerraform(this._aggregationDelay),
      aggregation_method: cdktf.stringToTerraform(this._aggregationMethod),
      aggregation_timer: cdktf.numberToTerraform(this._aggregationTimer),
      aggregation_window: cdktf.numberToTerraform(this._aggregationWindow),
      baseline_direction: cdktf.stringToTerraform(this._baselineDirection),
      close_violations_on_expiration: cdktf.booleanToTerraform(this._closeViolationsOnExpiration),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expected_groups: cdktf.numberToTerraform(this._expectedGroups),
      expiration_duration: cdktf.numberToTerraform(this._expirationDuration),
      fill_option: cdktf.stringToTerraform(this._fillOption),
      fill_value: cdktf.numberToTerraform(this._fillValue),
      ignore_overlap: cdktf.booleanToTerraform(this._ignoreOverlap),
      name: cdktf.stringToTerraform(this._name),
      open_violation_on_expiration: cdktf.booleanToTerraform(this._openViolationOnExpiration),
      open_violation_on_group_overlap: cdktf.booleanToTerraform(this._openViolationOnGroupOverlap),
      policy_id: cdktf.numberToTerraform(this._policyId),
      runbook_url: cdktf.stringToTerraform(this._runbookUrl),
      type: cdktf.stringToTerraform(this._type),
      value_function: cdktf.stringToTerraform(this._valueFunction),
      violation_time_limit: cdktf.stringToTerraform(this._violationTimeLimit),
      violation_time_limit_seconds: cdktf.numberToTerraform(this._violationTimeLimitSeconds),
      critical: nrqlAlertConditionCriticalToTerraform(this._critical),
      nrql: nrqlAlertConditionNrqlToTerraform(this._nrql),
      term: cdktf.listMapper(nrqlAlertConditionTermToTerraform)(this._term),
      warning: nrqlAlertConditionWarningToTerraform(this._warning),
    };
  }
}
