# frozen_string_literal: true

require "open3"

class GitVersion
  class << self
    def commit_hash
      ENV["GIT_COMMIT_HASH"] || run_git_command("rev-parse HEAD")
    end

    def short_hash
      ENV["GIT_SHORT_HASH"] || run_git_command("rev-parse --short HEAD")
    end

    def commit_date
      ENV["GIT_COMMIT_DATE"] || run_git_command("log -1 --format=%cd --date=iso")
    end

    def branch
      ENV["GIT_BRANCH"] || run_git_command("rev-parse --abbrev-ref HEAD")
    end

    def tag
      ENV["GIT_TAG"] || run_git_command("describe --tags --abbrev=0 2>/dev/null")
    end

    def version_info
      {
        commit_hash: commit_hash,
        short_hash: short_hash,
        commit_date: commit_date,
        branch: branch,
        tag: tag
      }
    rescue => e
      Rails.logger.warn "Could not extract Git version info: #{e.message}"
      {error: "Git info unavailable"}
    end

    private

    def run_git_command(command)
      puts "Running git command: git #{command}"
      stdout, stderr, status = Open3.capture3("git #{command}")

      if status.success?
        stdout.strip
      else
        "missing" # we do not want to fail the app if we cannot get some info
      end
    end
  end
end
