import mongoose from 'mongoose'

const connectDB = async () => {
    try {
     const conn = await mongoose.connect(process.env.MONGO_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true
     })
     console.log('MOngoDB Connected')
    } catch (e) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB