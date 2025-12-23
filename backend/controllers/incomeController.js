const Income = require('../models/Income')
const xlsx = require('xlsx')
const user = require('../models/User')

//add income source
exports.addIncome = async (req,res) => {
    const userId = req.user.id
    try{
        const {icon, source, amount, date} = req.body;

        if(!source || !amount || !date){
            return res.status(400).json({message : "All fields are required"})
        }
        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });
        await newIncome.save()
        res.status(200).json(newIncome)
    }catch(err){
        res.status(500).json({message : "server error"})
    }
}
//get all income source
exports.getAllIncome = async (req,res) => {
const userId = req.user.id;
try{
    const income = await Income.find({userId}).sort({date: -1})
    res.json(income)
}catch(error){
    res.status(500).json({message : "Server Error"})
}
}
//delete income source
exports.deleteIncome = async (req,res) => {
    const userId = req.user.id; 
    const incomeId = req.params.id;
    try{
        const income = await Income.findOne({ _id: incomeId, userId });
        if(!income){
            return res.status(404).json({message:"income not found or not authorized"})
        }
        await income.deleteOne()
        res.status(200).json({message:" Deleted succesfully"})
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
//download income (excel format)
exports.downloadIncomeExcel = async (req,res) => {
    const userId = req.user.id;
    try {
        const income = await Income.find({userId }).sort({date:-1});
        //preparing data for excel
        const data = income.map((item)=> ({
            Source:item.source,
            Amount:item.amount,
            Date:item.date,
        }));

        const wb = xlsx.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Income");

        const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
        res.setHeader('Content-Disposition', 'attachment; filename=income_details.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (error) {
        res.status(500).json({message : "Server error"})
    }
}