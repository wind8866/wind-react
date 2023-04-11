import { getBaseRollupPlugins, getPackageJSON, resolvePkgPath } from "./utils"
import generatePackageJSON from 'rollup-plugin-generate-package-json'

const { name, module } = getPackageJSON('react')
const pkgPath = resolvePkgPath(name)
const pkgDistPath = resolvePkgPath(name, true)

export default [
  // react
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: 'index.js',
      format: 'umd'
    },
    plugins: [...getBaseRollupPlugins(), generatePackageJSON({
      inputFolder: pkgPath,
      outputFolder: pkgDistPath,
      baseContents: ({ name, description, version }) => ({
        name, description, version, main: 'index.js'
      })
    })]
  },
  // jsx-runtime
  {
    input: `${pkgPath}/src/jsx.ts`,
    output: [
      {
        file: `${pkgDistPath}/jsx-rumtime.js`,
        name: 'jsx-rumtime.js',
        format: 'umd'
      },
      {
        file: `${pkgDistPath}/jsx-dev-rumtime.js`,
        name: 'jsx-dev-rumtime.js',
        format: 'umd'
      }
    ],
    plugins: [...getBaseRollupPlugins()]
  },

]