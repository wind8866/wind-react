import {
	ElementType,
	Key,
	Props,
	ReactElementType,
	Ref,
	Type
} from 'shared/ReactTypes'
import { REACT_ELMENT_TYPE } from 'shared/reactSymbols'

/**
 * 将相关参数组合返回 React对象
 */
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'wind'
	}
	return element
}

/**
 * 执行将JSX变异后的代码，调用 ReactElement 生成 React 对象
 * <div title="btn">btn</div> => _jsx("div", { title: "btn", children: "btn" })
 * https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=usage&corejs=3.6&spec=false&loose=false&code_lz=DwEwlgbgBALmMBsCmBeARAIxgOzQPi22AHpwI8g&debug=false&forceAllTransforms=true&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.21.4&externalPlugins=&assumptions=%7B%7D
 */
export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null
	const props: Props = {}
	let ref: Ref = null
	for (const [k, value] of Object.entries(config)) {
		if (k === 'key') {
			key = String(k)
			continue
		}
		if (k === 'ref') {
			if (k !== undefined) {
				ref = value
			}
			continue
		}
		props[k] = value
	}
	if (maybeChildren?.length === 0) {
		props.children = maybeChildren[0]
	} else if (maybeChildren?.length > 0) {
		props.children = maybeChildren
	}
	return ReactElement(type, key, ref, props)
}

export const jsxDev = jsx
