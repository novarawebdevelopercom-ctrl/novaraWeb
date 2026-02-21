import { contactSchema } from '@/lib/validators/contactSchema';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    await prisma.contactRequest.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        projectType: data.projectType,
        message: data.message,
      },
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { ok: false, message: err?.message ?? 'Bad request' },
      { status: 400 }
    );
  }
}