const USER = require('../../model/userSchema')

exports.signUp = async (req, res) => {
    const { name, email, contactNum, password } = req.body

    if (name === '' || email === '' || contactNum === '' || password === '') {
        return res.status(404).json({ message: "Something went wrong!!!" })
    } else {
        try {
            const userExist = await USER.findOne({ email })
            if (userExist != null) {
                return res.status(422).json({ message: "User Already Exist!!!" })
            } else {
                const _user = new USER({ name, email, contactNum, password })
                await _user.save()
                return res.status(201).json({ message: "User Registretion Successfull!!!" })
            }
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }
}

exports.signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({
                message: "Something went wrong!!!"
            })
        } else {
            const user = await USER.findOne({ email })
            if (user === null) {
                return res.status(400).json({ message: "User not exist!!!" })
            } else {
                const checkpass = await user.authenticate(password)
                if (checkpass) {
                    const login = await user.generateToken(user.name, user.email, user.role)

                    return res.status(200).json({ message: login })
                } else {
                    return res.status(400).json({ message: "wrong password" })
                }
            }
        }
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}

