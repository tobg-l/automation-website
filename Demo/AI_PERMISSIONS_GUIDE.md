# AI Agent Permissions Guide

This document outlines the permissions and settings needed for the AI agent to execute commands and operations without requiring manual approval for each action.

## Overview

This guide serves as a reference for understanding what permissions the AI agent typically needs and how to configure Cursor to allow automatic execution of common operations.

## Required Permissions

### 1. File System Operations
- **Read**: Access to read files in the workspace and system
- **Write**: Ability to create, modify, and delete files
- **Execute**: Run scripts and executables

### 2. Terminal/Command Execution
- **Network**: For package installations, API calls, and fetching dependencies
- **Git Operations**: For version control operations (read-only by default, write when needed)
- **System Commands**: Execute shell commands, scripts, and build tools

### 3. Sandbox Permissions
The default sandbox allows:
- ✅ Most file operations (read/write in workspace)
- ✅ Reading from git state
- ❌ Network access (requires explicit permission)
- ❌ Git write operations (requires explicit permission)
- ❌ Modifications to ignored files

## Common Scenarios Requiring Permissions

### Package Management
```bash
# Requires: network permission
npm install
pip install package-name
```

### Git Operations
```bash
# Requires: git_write permission
git commit
git push
git checkout branch-name
```

### Server/Network Operations
```bash
# Requires: network permission
npm start
python -m http.server
curl https://api.example.com
```

### File Operations on Ignored Files
```bash
# Requires: all permission (if file is in .gitignore)
# Example: modifying .env files, node_modules, etc.
```

## Cursor Settings Configuration

**Important Note**: Cursor's permission system is designed for security. The AI agent cannot grant itself permissions - all permission requests must be approved by you. However, understanding what permissions are needed can help you approve them more quickly.

### Current Permission System

Cursor uses a sandbox system where:
- Most file operations work automatically (reading/writing files in workspace)
- Network access requires explicit approval (for package installs, API calls)
- Git write operations require explicit approval (for commits, pushes)
- Operations on ignored files may require special permissions

### How Permissions Work

When the AI needs permissions, it will:
1. Request specific permissions (`network`, `git_write`, or `all`)
2. Wait for your approval
3. Execute the command after approval

**To speed up workflow**: When you see permission requests, you can approve them if you trust the operation. Common safe operations:
- `network` for `npm install`, `pip install` - generally safe
- `git_write` for commits - review the changes first
- `all` - use with caution, only for trusted operations

## Permission Request Patterns

When the AI needs permissions, it will request them using the `required_permissions` parameter:

- `network`: For internet access, API calls, package installs
- `git_write`: For git commits, pushes, branch operations
- `all`: For operations requiring full system access

## Best Practices

1. **Grant permissions proactively**: If you trust the AI agent, grant permissions upfront for common operations
2. **Review before committing**: Even with auto-execution, review git commits before they're pushed
3. **Monitor network operations**: Be aware of what network requests are being made
4. **Use workspace-specific settings**: Consider using `.vscode/settings.json` for project-specific permissions

## Security Considerations

- **Network access**: Allows the AI to make external API calls and fetch packages
- **Git write access**: Allows the AI to modify your repository history
- **All permissions**: Disables sandbox entirely - use with caution

## Troubleshooting

If commands are still requiring approval:

1. Check Cursor settings for auto-execution options
2. Verify the command requires permissions (check if it needs `network`, `git_write`, or `all`)
3. Review Cursor's security settings
4. Check if the file/directory is in `.gitignore` or `.cursorignore`

## Document Purpose

This document serves as:
- A reference for understanding permission requirements
- A guide for configuring Cursor to reduce manual approvals
- Documentation of common permission scenarios
- A troubleshooting resource

---

**Last Updated**: January 26, 2026
**Workspace**: `/Users/admin/Desktop/Automation Website/Demo`
