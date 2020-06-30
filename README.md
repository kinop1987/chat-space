# ChatSpace DB設計
## usersテーブル
| Column | Type | Options |
|:-------|-----:|:-------:|
|name|string|null: false|
|emal|string|unique: true|
|user_group|integer|null: false, foreign_key: true|
### Association
- has_many :groups, through: :users_groups
- has_many :messages

## gropsテーブル

| Column | Type | Options |
|:-------|-----:|:-------:|
|group|string|null: false|
|user_group|integer|null: false, foreign_key: true|
### Associtation
- has_many :users, through: :users_groups
- has_many :messages

## user_groupテーブル

| Column | Type | Options |
|:-------|-----:|:-------:|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
### Associtation
- belongs_to :user
- belongs_to :group

## messagesテーブル

| Column | Type | Options |
|:-------|-----:|:-------:|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
