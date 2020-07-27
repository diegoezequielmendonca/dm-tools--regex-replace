const	chalk	= require('chalk'),
		fs		= require('fs-extra')

const folders	= {
	dist:	'./processed/',
	src:	'./replace/',
}

let	fileContentProcessed,
	saveConfirm

const replace = () => {

	fs.removeSync(folders.dist)
	
	fs.readdirSync(folders.src).forEach(file => {

		saveConfirm = false

		let fileContent = fs.readFileSync(folders.src + file, {encoding: 'utf8', flag: 'r'})

		require('./regEx').forEach((regEx) => {

			while (fileContent.match(regEx[0])) {
				fileContent = fileContent.replace(regEx[0], regEx[1])
				saveConfirm = true
			}
		
			return fileContentProcessed = fileContent

		})

		if (saveConfirm) {
			fs.outputFile(folders.dist + file, fileContentProcessed)
			console.log(chalk.green(file))
		} else {
			console.log(chalk.gray(file))
		}
		
	})

}

replace()