export interface UsersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    created_at?: Date;
  }
  
  export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
  }