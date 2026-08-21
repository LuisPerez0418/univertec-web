import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('--- LOGIN ATTEMPT ---');
    console.log('Received Email:', email);

    // 1. Verificar si el usuario existe en la base de datos
    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log('Login Failed: Usuario no encontrado en la base de datos.');
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    // 2. Verificar la contraseña con bcrypt
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log('Login Failed: La contraseña no coincide (bcrypt mismatch).');
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    console.log('Login Successful para:', admin.email);

    // 3. Generar el JWT
    const payload = {
      admin: {
        id: admin._id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'supersecreto_univertec_2026', {
      expiresIn: '1h'
    });

    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error('Error en el login:', error);
    return res.status(500).json({ success: false, message: 'Error del servidor' });
  }
};
