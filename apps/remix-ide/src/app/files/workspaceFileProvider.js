'use strict'

const FileProvider = require('./fileProvider')

class WorkspaceFileProvider extends FileProvider {
  constructor () {
    super('')
  }

  setWorkspace (workspace) {
    workspace = workspace.replace(/^\/|\/$/g, '') // remove first and last slash
    this.workspace = workspace
  }

  scopeWorkspace (path) {
    if (path.startsWith(this.workspace)) return path
    path = path.replace(/^\/|\/$/g, '') // remove first and last slash
    return this.workspace + '/' + path
  }

  removePrefix (path) {
    path = super.removePrefix(path)
    return this.scopeWorkspace(path)
  }
}

module.exports = WorkspaceFileProvider
