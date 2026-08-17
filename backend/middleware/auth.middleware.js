import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // Obtener el token del header (por ejemplo: "Bearer eyJhbGci...")
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Acceso denegado. No hay token proporcionado.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecreto_univertec_2026');
    req.admin = decoded.admin; // Guardamos el usuario decodificado en la request
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Token inválido o expirado.' });
  }
};
