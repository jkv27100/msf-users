const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  name: { type: String, default: "" },
  testimonial: { type: String, default: "" },
});

const UserSchema = new Schema(
  {
    profile_pic: { type: String, default: "" },
    full_name: { type: String, default: "" },
    designation: { type: String, default: "" },
    whtsapp_number: {
      type: String,
      unique: true,
      default: "",
      maxlength: 10,
      required: true,
    },
    badges: [String],
    about_us: { type: String, default: "" },
    services: {
      name: { type: String, default: "" },
      img_link: { type: String, default: "" },
      price: { type: Number, default: "" },
    },
    location: { type: String, default: "" },
    experience: { type: String, default: "" },
    areas_served: { type: String, default: "" },
    freelance_type: { type: String, default: "" },
    gender: { type: String, default: "" },
    skillset: [String],
    works_img_link: [String],
    website_link: [String],
    work_content: {
      title: { type: String, default: "" },
      desc: { type: String, default: "" },
    },
    video_links: [String],
    testimonials: [TestimonialSchema],
    industries: [String],
    category: { type: String, default: "" },
    portfolio_status: { type: String, default: "" },
    reward_points: { type: Number, default: 0 },
    work_reward_points: { type: Number, default: 0 },
    freelancer_rank_code: { type: String, default: "" },
    technical_eval_points: { type: Number, default: 0 },
    personal_eval_points: { type: Number, default: 0 },
    eval_remarks: { type: String, default: "" },
    feedback: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("msf_users", UserSchema);

module.exports = User;
