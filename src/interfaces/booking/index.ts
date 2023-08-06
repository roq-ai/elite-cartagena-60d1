import { ExperienceInterface } from 'interfaces/experience';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  experience_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  experience?: ExperienceInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  experience_id?: string;
  user_id?: string;
}
