import multer from 'multer';

const storage = multer.memoryStorage(); // Use memory storage for files
const upload = multer({ storage });

// Apply middleware to routes that need file handling
router.post('/register', upload.single('profilePhoto'), register);
