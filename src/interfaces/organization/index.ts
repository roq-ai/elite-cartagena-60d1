import { ExperienceInterface } from 'interfaces/experience';
import { RenamedpackageInterface } from 'interfaces/renamedpackage';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  experience?: ExperienceInterface[];
  Renamedpackage?: RenamedpackageInterface[];
  user?: UserInterface;
  _count?: {
    experience?: number;
    Renamedpackage?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
