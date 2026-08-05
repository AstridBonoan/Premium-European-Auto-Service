import { motion } from 'framer-motion';

export default function GalleryCard({ item }) {
  return (
    <motion.figure
      className="group relative aspect-[4/3] overflow-hidden bg-carbon"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-matte/85 via-matte/20 to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          {item.category}
        </span>
        <span className="mt-1 font-display text-xl text-offwhite">{item.title}</span>
      </figcaption>
    </motion.figure>
  );
}
