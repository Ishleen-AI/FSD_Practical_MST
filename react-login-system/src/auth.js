export const simulateLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Dummy check for demonstration
      if (username === 'admin' && password === 'password123') {
        const payload = {
          userId: 'user_123',
          role: 'Admin',
          exp: Date.now() + 3600000 // 1 hour expiration
        };
        const token = createFakeJWT(payload);
        resolve({ token, role: payload.role });
      } else if (username === 'user' && password === 'password123') {
        const payload = {
          userId: 'user_456',
          role: 'User',
          exp: Date.now() + 3600000
        };
        const token = createFakeJWT(payload);
        resolve({ token, role: payload.role });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 500); // Simulate network request
  });
};

const createFakeJWT = (payload) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = 'simulated_signature_xyz';
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

export const parseFakeJWT = (token) => {
  try {
    const [, payloadBase64] = token.split('.');
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
  } catch (error) {
    return null;
  }
};
