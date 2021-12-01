export interface ICreate {
  issue_id: number;
  user_id: number;
  //9
  activity_id: number;
  comments: string;
  hours: number;
  spent_on?: string;
}
