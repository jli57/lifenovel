json.extract! user,
    :id,
    :first_name,
    :last_name,
    :email,
    :mobile_number,
    :birth_date,
    :gender
json.profile_photo polymorphic_url(user.profile_photo)
