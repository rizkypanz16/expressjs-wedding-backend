// Wedding Backend Service

Table event_users {
  id uuid [primary key]
  username varchar
  description text
  created_at timestamp
  updated_at timestamp
}

Table event {
  id uuid [primary key]
  title varchar
  description text
  event_users_id uuid
  event_date date
  location varchar
  location_maps text
  event_akad_id uuid
  event_resepsi_id uuid
  created_at timestamp
  updated_at timestamp
}

Table event_akad {
  id uuid [primary key]
  title varchar
  description text
  event_users_id uuid
  event_date date
  event_hour varchar
  location varchar
  location_maps text
  created_at timestamp
  updated_at timestamp
}

Table event_resepsi {
  id uuid [primary key]
  title varchar
  description text
  event_users_id uuid
  event_date date
  event_hour varchar
  location varchar
  location_maps text
  created_at timestamp
  updated_at timestamp
}

Table guest {
  id uuid [primary key]
  name varchar
  email varchar
  phone varchar
  location varchar
  event_id uuid
  created_at timestamp
  updated_at timestamp
}

Table rsvp {
  id uuid [primary key]
  event_id uuid
  guest_id uuid
  response_status enum
  created_at timestamp
  updated_at timestamp
}

Ref: event_users.id - event.event_users_id
Ref: event.event_akad_id - event_akad.id
Ref: event.event_resepsi_id - event_resepsi.id
Ref: guest.event_id > event.id
Ref: rsvp.guest_id - guest.id
Ref: rsvp.event_id > event.id