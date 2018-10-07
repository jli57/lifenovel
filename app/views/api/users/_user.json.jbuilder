json.set! user.id do
  json.extract! user,
    :id,
    :first_name,
    :last_name,
    :email,
    :mobile_number,
    :birth_date,
    :gender
end
