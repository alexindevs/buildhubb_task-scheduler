import { CategoryModel } from "./category.model";

export default class CategoryService {
    async createCategory(name: string, color: string, id: string) {
        try {
            const category = new CategoryModel({ name, color, user_id: id });
            await category.save();
            return category;
        } catch (error: any) {
            throw error;
        }
    }

    async getCategoriesByUser(userid: string) {
        try {
            const categories = await CategoryModel.find({ user_id: userid });
            return categories;
        } catch (error: any) {
            throw error;
        }
    }

    async getCategoryById(id: string) {
        try {
            const category = await CategoryModel.findById(id);
            return category;
        } catch (error: any) {
            throw error;
        }
    }

    async updateCategory(id: string, updates: object) {
        try {
            const category = await CategoryModel.findOneAndUpdate({ _id: id }, updates, { new: true });
            return category;
        } catch (error: any) {
            throw error;
        }
    }

    async deleteCategory(id: string) {
        try {
            // TODO: Implement code to delete category related tasks
            const category = await CategoryModel.findByIdAndDelete(id);
            return category;
        } catch (error: any) {
            throw error;
        }
    }
}