import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const payload = {
      admin: {
        id: admin._id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'supersecreto_univertec_2026', {
      expiresIn: '1h' // El token expira en 1 hora
    });

    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};
