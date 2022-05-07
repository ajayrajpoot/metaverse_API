
"use strict";
const moment = require('moment')
const Layout = require('es6views').Layout

class Slip extends Layout {

    parse() {
        let data = this._data

        let markup = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
			    <meta charset="UTF-8">
			    <title>Title</title>
	 
			</head>
			<body>`
        markup += `
							<tr>
								<th>S.NO</th>
								<th>Item Name</th>
								<th>Qty.</th>
								<th>Amount</th>
							</tr>
							${rows} 
						</table>`


        markup += `</body></html>`


        this._markup = markup
    }

    skuListRow(data) {
        return ` `
    }

}



module.exports = Slip
