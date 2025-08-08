const userService = require('../services/userService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();


exports.creacteUser = async (req, res, next) => {
    try {
        const data = req.body
        //  password is bcrypt
        if (data.password) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;
        }

        const user = await userService.createUser(data);
        res.status(201).json({ massege: "user created succefully", user })
    }
    catch (err) {
        next(err)
    }
}

exports.viewuser = async (req, res, next) => {
    try {
        const user = await userService.viewUser()
        res.status(200).json({ user: user })
    }
    catch (err) {
        next(err)
    }
}

exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userService.getById(id)
        res.status(200).json({ user: user })
    }
    catch (err) {
        next(err)
    }
}

exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await userService.deleteById(id);
        res.status(200).json({
            message: `User deleted. ID: ${id}`,
            result
        });
    } catch (err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body
        const upduser = await userService.updateUser(id, data)
        res.status(200).json({ user: "updated successfully", upduser })
    }
    catch (err) {
        next(err)
    }
}


//login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                is_admin: user.is_admin,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token });
    } catch (err) {
        next(err);
    }
};



