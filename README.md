# README

Rails + React 샘플 프로젝트 (참고용)

## 프로젝트 생성

```shell
rails new project -d=mysql -T --webpack=react
```

## .gitignore 수정하기

[.gitignore 생성기](https://www.toptal.com/developers/gitignore)

[sample](https://www.toptal.com/developers/gitignore/api/ruby,rails,react,node,yarn,storybookjs,rubymine,visualstudiocode,osx,windows,linux)

추가 항목

```.gitignore
.idea
db/schema.rb
```

## 설정 파일 수정

config/application.rb

```ruby
config.time_zone = 'Seoul'
config.active_record.default_timezone = :utc

config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
config.i18n.default_locale = :ko

# Don't generate system test files.
config.generators.system_tests = nil
config.generators.assets = false
config.generators.helper = false
```

config/locales/ko.yml 생성
```shell
vi ./config/locales/ko.yml
```

config/database.yml

규칙은 DATABASE_URL="mysql2://myuser:mypass@localhost/somedatabase" 을 이용하면 된다.
```yaml
development:
  url: <%= ENV['DATABASE'].nil? ? Rails.application.credentials.database : ENV['DATABASE'] %>

test:
  url: <%= ENV['TEST_DATABASE'].nil? ? Rails.application.credentials.t_database : ENV['TEST_DATABASE'] %>

production:
  url: <%= ENV['DATABASE'].nil? ? Rails.application.credentials.database : ENV['DATABASE'] %>
```

암호화 "database", "t_database" 키 입력
```shell
EDITOR=vim rails credentials:edit
```

```text
database: mysql2://root:password@localhost:3306/project?pool=5&timeout=5000&encoding=utf8mb4
t_database: mysql2://root:password@localhost:3306/project_test?pool=5&timeout=5000&encoding=utf8mb4
```

config/webpack/environment.js 하단에 추가
```javascript
// Rails React 에서 web packer 에러가 나는 상황
// https://github.com/edsinclair/rails-react-table-test/blob/master/config/webpack/environment.js
const nodeModulesLoader = environment.loaders.get('nodeModules')
if (!Array.isArray(nodeModulesLoader.exclude)) {
  nodeModulesLoader.exclude = (nodeModulesLoader.exclude == null) ? [] : [nodeModulesLoader.exclude]
}
```
