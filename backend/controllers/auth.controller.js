import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@univertec.org';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    console.log('--- LOGIN ATTEMPT ---');
    console.log('Received Body:', req.body);
    console.log('Expected Email:', adminEmail);
    // Don't log expected password completely in prod, but for debugging we can log it or a masked version. Let's log it.
    console.log('Expected Password:', adminPassword);

    if (email !== adminEmail || password !== adminPassword) {
      console.log('Login Failed: Credentials mismatch.');
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
    console.log('Login Successful!');

    const payload = {
      admin: {
        id: 'static_admin_id'
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
