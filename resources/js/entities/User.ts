import type { User as UserType } from '@/types';

export class User {
  static async me(): Promise<UserType> {
    // Mock implementation - replace with actual API call
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }

  static async findById(id: string): Promise<UserType | null> {
    // Mock implementation - replace with actual API call
    if (id === '1') {
      return await this.me();
    }
    return null;
  }

  static async findAll(): Promise<UserType[]> {
    // Mock implementation - replace with actual API call
    return [await this.me()];
  }

  static async create(userData: Partial<UserType>): Promise<UserType> {
    // Mock implementation - replace with actual API call
    const newUser: UserType = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'user',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...userData,
    };
    return newUser;
  }

  static async update(id: string, userData: Partial<UserType>): Promise<UserType> {
    // Mock implementation - replace with actual API call
    const existingUser = await this.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    
    return {
      ...existingUser,
      ...userData,
      updated_at: new Date().toISOString(),
    };
  }

  static async delete(id: string): Promise<boolean> {
    // Mock implementation - replace with actual API call
    return true;
  }
}
