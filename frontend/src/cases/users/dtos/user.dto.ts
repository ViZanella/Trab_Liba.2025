export interface UserDTO{
    id?: string;
    name: string;
    email: string;
    supabase: string;
    hasMFA: boolean;

    factorID: string;
    isMFAValidated?: boolean;
    isFirstMFAAccess?: boolean;
}