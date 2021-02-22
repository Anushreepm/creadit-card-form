const { Schema } = mongoose;

const { Schema } = mongoose;
const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creditCardNumber: {
      type: String,
      required: true,
    },
    creditCardDate: {
      type: String,
      required: true,
    },
    creditCardCCV: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
