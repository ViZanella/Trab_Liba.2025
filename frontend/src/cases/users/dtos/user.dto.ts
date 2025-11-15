export interface UserDTO{
    id?: string;
    name: string;
    email: string;
    supabase: string;
    hasMFA: boolean;

    factorID: string;
    isMfaValidated?: boolean;
    isFirstMfaAccess?: boolean;
}