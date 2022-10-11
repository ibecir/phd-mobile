export type LoginParams = {
  id?: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  email: string;
  username: string;
};

export type PredictionFormType = {
  year: number;
  device: string;
  manufacturer: string;
  type: string;
  output_class: string;
  first_visual_inspection: string;
  second_visual_inspection: string;
  third_visual_inspection: string;
  fourth_visual_inspection: string;
  parameter_of_inspection: string;
  first_set_value: number;
  first_measured_value: number;
  first_error: number;
  first_allowed_deviation: number;
  first_decision: string;
  second_set_value: number;
  second_measured_value: number;
  second_error: number;
  second_allowed_deviation: number;
  second_decision: string;
  third_set_value: number;
  third_measured_value: number;
  third_error: number;
  third_allowed_deviation: number;
  third_decision: string;
  fourth_set_value: number;
  fourth_measured_value: number;
  fourth_error: number;
  fourth_allowed_deviation: number;
  fourth_decision: string;
  fifth_set_value: number;
  fifth_measured_value: number;
  fifth_error: number;
  fifth_allowed_deviation: number;
  fifth_decision: string;
  sixth_set_value: number;
  sixth_measured_value: number;
  sixth_error: number;
  sixth_allowed_deviation: number;
  sixth_decision: string;
};
