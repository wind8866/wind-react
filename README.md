- [现代前端工程为什么越来越离不开 Monorepo?](https://juejin.cn/post/6944877410827370504)
- [pnpm workspace](https://pnpm.io/workspaces)
- [pnpm 是凭什么对 npm 和 yarn 降维打击的](https://juejin.cn/post/7127295203177676837)

```
pnpm i eslint -D -w
npx eslint --init
npx husky install
npx husky add .husky/pre-commit "pnpm lint"
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"
npx tsc --init
```
