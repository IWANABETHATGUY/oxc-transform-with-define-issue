import * as fs from 'fs'
import * as path from 'path'
import {transform} from 'oxc-transform'


const res = fs.readFileSync(path.resolve(import.meta.dirname, 'test.js'), 'utf-8')

transform('test.js', res, {
	define: {
		XMLHttpRequest: "undefined",
	},
})

console.log('-------------------')
