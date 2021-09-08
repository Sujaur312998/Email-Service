const TableSchema = require('../../model/tableSchema');


exports.tableData = async (req, res) => {
    const data = await TableSchema.find({})
    return res.status(200).json(data)
}