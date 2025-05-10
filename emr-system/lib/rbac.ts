type UserRole = 'ADMIN' | 'DOCTOR' | 'TECHNICIAN' | 'PHARMACIST' | 'RECORD_OFFICER' | 'NURSE';
type Action = 'VIEW' | 'CREATE' | 'UPDATE' | 'DELETE' | '*';
type Resource = string;

interface Permission {
  action: Action;
  resource: Resource;
}

const rolePermissions: Record<UserRole, Permission[]> = {
  ADMIN: [
    { action: '*', resource: '*' },
  ],
  DOCTOR: [
    { action: 'VIEW', resource: 'PATIENT' },
    { action: 'VIEW', resource: 'MEDICAL_HISTORY' },
    { action: 'VIEW', resource: 'LAB_RESULT' },
    { action: 'CREATE', resource: 'DIAGNOSIS' },
    { action: 'CREATE', resource: 'PRESCRIPTION' },
    { action: 'CREATE', resource: 'LAB_ORDER' },
    { action: 'UPDATE', resource: 'DIAGNOSIS' },
    { action: 'UPDATE', resource: 'PRESCRIPTION' },
  ],
  TECHNICIAN: [
    { action: 'VIEW', resource: 'LAB_ORDER' },
    { action: 'UPDATE', resource: 'LAB_RESULT' },
  ],
  PHARMACIST: [
    { action: 'VIEW', resource: 'PRESCRIPTION' },
    { action: 'UPDATE', resource: 'PRESCRIPTION' },
  ],
  RECORD_OFFICER: [
    { action: 'VIEW', resource: 'PATIENT' },
    { action: 'CREATE', resource: 'PATIENT' },
    { action: 'UPDATE', resource: 'PATIENT' },
  ],
  NURSE: [
    { action: 'VIEW', resource: 'PATIENT' },
    { action: 'VIEW', resource: 'MEDICAL_HISTORY' },
    { action: 'VIEW', resource: 'PRESCRIPTION' },
    { action: 'CREATE', resource: 'MEDICAL_HISTORY' },
    { action: 'UPDATE', resource: 'MEDICAL_HISTORY' },
  ],
};

export function hasPermission(
  role: UserRole,
  action: Exclude<Action, '*'>,
  resource: string
): boolean {
  const permissions = rolePermissions[role];
  if (!permissions) return false;

  return permissions.some(
    (permission) =>
      (permission.action === action || permission.action === '*') &&
      (permission.resource === resource || permission.resource === '*')
  );
}

export function getRolePermissions(role: UserRole): Permission[] {
  return rolePermissions[role] || [];
}

export function canAccessResource(
  role: UserRole,
  action: Exclude<Action, '*'>,
  resource: string
): boolean {
  // Admin has access to everything
  if (role === 'ADMIN') return true;

  return hasPermission(role, action, resource);
}

export function getAccessibleResources(role: UserRole): string[] {
  const permissions = getRolePermissions(role);
  const resources = new Set<string>();

  permissions.forEach((permission) => {
    if (permission.resource !== '*') {
      resources.add(permission.resource);
    }
  });

  return Array.from(resources);
}

export function getResourceActions(
  role: UserRole,
  resource: string
): Exclude<Action, '*'>[] {
  const permissions = getRolePermissions(role);
  const actions = new Set<Exclude<Action, '*'>>();

  permissions.forEach((permission) => {
    if (permission.resource === resource || permission.resource === '*') {
      if (permission.action !== '*') {
        actions.add(permission.action);
      }
    }
  });

  return Array.from(actions);
} 