"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    trimUser(user) {
        return {
            _id: user._id,
            email: user.email,
            name: user.name,
        };
    }
    async create(createUserDto) {
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new common_1.BadRequestException("Password and Confirm Password doesn't match");
        }
        if (await this.usersModel.findOne({ email: createUserDto.email })) {
            throw new common_1.BadRequestException("Email already taken");
        }
        const newUser = new this.usersModel({
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password,
        });
        const user = await newUser.save();
        return this.trimUser(user);
    }
    async findAll() {
        const users = await this.usersModel.find({}, "_id email name");
        return users;
    }
    async findOne({ id, email, }) {
        const user = id
            ? await this.usersModel.findById(id)
            : email
                ? await this.usersModel.findOne({ email })
                : null;
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return { user, trimmedUser: this.trimUser(user) };
    }
    async update(id, updateUserDto) {
        if (!(await this.usersModel.findById(id))) {
            throw new common_1.NotFoundException("User not found");
        }
        if (updateUserDto.password &&
            updateUserDto.confirm_password &&
            updateUserDto.password !== updateUserDto.confirm_password) {
            throw new common_1.BadRequestException("Password and Confirm Password doesn't match");
        }
        const user = await this.usersModel.findByIdAndUpdate(id, {
            email: updateUserDto.email,
            name: updateUserDto.name,
            password: updateUserDto.password,
        }, { new: true });
        if (!user) {
            throw new common_1.BadRequestException("Unable to update user please try again later");
        }
        return this.trimUser(user);
    }
    async remove(id) {
        await this.usersModel.findByIdAndRemove(id).catch((err) => {
            throw new common_1.BadRequestException(String(err));
        });
        return "User removed";
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("users")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map