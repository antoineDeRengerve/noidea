# frozen_string_literal: true

require "open3"

class GitVersion
  class << self
    def commit_hash
      ENV["GIT_COMMIT_HASH"] || `git rev-parse HEAD 2>/dev/null || echo ""`
    end

    def short_hash
      ENV["GIT_SHORT_HASH"] || `git rev-parse --short HEAD 2>/dev/null || echo ""`
    end

    def commit_date
      ENV["GIT_COMMIT_DATE"] || `git log -1 --format=%cd --date=iso 2>/dev/null || echo ""`
    end

    def branch
      ENV["GIT_BRANCH"] || `git rev-parse --abbrev-ref HEAD 2>/dev/null || echo ""`
    end

    def tag
      ENV["GIT_TAG"] || `git describe --tags --abbrev=0 2>/dev/null || echo ""`
    end

    def version_info
      {
        commit_hash: commit_hash,
        short_hash: short_hash,
        commit_date: commit_date,
        branch: branch,
        tag: tag
      }
    end
  end
end
