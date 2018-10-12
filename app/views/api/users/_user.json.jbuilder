json.extract! user,
    :id,
    :first_name,
    :last_name,
    :email,
    :mobile_number,
    :birth_date,
    :gender
json.profile_photo url_for(user.profile_photo)
