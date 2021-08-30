import type { ViteDevServer } from 'vite';

import type { AppOptions } from './AppOptions.js';
import type { Markdown } from './markdown/Markdown.js';
import type { MarkdownOptions } from './markdown/MarkdownOptions.js';
import type { Page } from './page/Page.js';
import type { SiteOptions } from './site/SiteOptions.js';

export type App = {
  dirs: AppDirs;
  layouts: Record<string, string>;
  markdown: AppMarkdown;
  meta: AppMeta;
  options: AppOptions;
  pages: Page[];
  pluginApi: unknown;
  site: AppSite;
  version: string;
  init: () => Promise<void>;
  dev: () => Promise<ViteDevServer>;
  build: () => Promise<unknown>;
};

export type AppDirs = {
  cache: AppDir;
  temp: AppDir;
  source: AppDir;
  dest: AppDir;
  public: AppDir;
  client: AppDir;
};

export type AppDir = {
  loadModule: <T>(...path: string[]) => Promise<T>;
  read: (filePath: string) => Promise<string>;
  resolve: (...path: string[]) => string;
  write: (filePath: string, contents: string) => Promise<void>;
};

export type AppMeta = {
  isBuild: boolean;
  isDev: boolean;
  isDebug: boolean;
};

export type AppSite = {
  options: SiteOptions;
};

export type AppMarkdown = {
  parser: Markdown;
  options: MarkdownOptions;
};
