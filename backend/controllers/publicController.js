const Profile = require("../models/profileModel");

const getPublicProfile = async(req,res)=>{

    const {id} = req.params;
    try {

        const profile = await Profile.findById(id);
        if (!profile) {
          return res.status(404).json({ error: 'Profile not found' });
        }
    
        // You can customize the response as needed before sending it back
        return res.status(200).json(profile);
      } catch (error) {
        console.error('Error fetching public profile:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}
module.exports = getPublicProfile