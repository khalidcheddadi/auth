import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

// Define the permissions for the posts resource
const statements = {
  ...defaultStatements,
  posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
} as const;
// Define the access control object with the statements
export const ac = createAccessControl(statements);

// Define the roles with their permissions
export const roles = {
  USER: ac.newRole({
    // Include permissions for posts
    posts: ["create", "read", "update:own", "delete:own"],
  }),
// Define the ADMIN role with all permissions for posts and admin statements
  ADMIN: ac.newRole({
    // Include all permissions for posts and admin statements
    posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
    ...adminAc.statements,
  }),
};
